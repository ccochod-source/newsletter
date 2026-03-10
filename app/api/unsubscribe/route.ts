import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const supabase = getSupabase()
    const { error, count } = await supabase
      .from('leads')
      .delete({ count: 'exact' })
      .eq('email', email.toLowerCase().trim())

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 })
    }

    if (count === 0) {
      return NextResponse.json({ error: 'Cet email n\'est pas inscrit.' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Désinscription réussie.' }, { status: 200 })
  } catch (err) {
    console.error('Unsubscribe error:', err)
    return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 })
  }
}
