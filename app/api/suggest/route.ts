import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, description } = body

    if (!url || !url.startsWith('http')) {
      return NextResponse.json({ error: 'URL invalide (doit commencer par http)' }, { status: 400 })
    }

    const supabase = getSupabase()
    const { error } = await supabase
      .from('suggestions')
      .insert([{ url: url.trim(), description: description?.trim() || null }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Suggestion envoyée !' }, { status: 201 })
  } catch (err) {
    console.error('Suggest error:', err)
    return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 })
  }
}
