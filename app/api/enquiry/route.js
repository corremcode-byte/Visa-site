import { getSupabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

function classifyLead(travelDate) {
  if (!travelDate) return 'cold'
  const days = Math.floor((new Date(travelDate) - new Date()) / 86400000)
  if (days <= 30) return 'hot'
  if (days <= 90) return 'warm'
  return 'cold'
}

export async function POST(request) {
  try {
    const body = await request.json()
    if (!body.name || !body.phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }
    const lead = classifyLead(body.travelDate)
    const { error } = await getSupabase().from('enquiries').insert({
      name: body.name.trim(),
      phone: body.phone.trim(),
      destination: body.destination?.trim() || null,
      travel_date: body.travelDate || null,
      lead,
    })
    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('POST /api/enquiry error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function GET(request) {
  const auth = request.headers.get('x-admin-key')
  if (auth !== 'zeno-admin-key') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { data, error } = await getSupabase()
    .from('enquiries')
    .select('*')
    .order('submitted_at', { ascending: false })
  if (error) {
    console.error('GET /api/enquiry error:', error)
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
  // Map snake_case DB columns → camelCase so the dashboard needs no changes
  return NextResponse.json(
    data.map(row => ({
      id: row.id.toString(),
      name: row.name,
      phone: row.phone,
      destination: row.destination ?? '',
      travelDate: row.travel_date ?? '',
      lead: row.lead,
      submittedAt: row.submitted_at,
    }))
  )
}
