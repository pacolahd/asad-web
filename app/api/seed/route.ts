/**
 * Temporary API Route for Database Seeding
 *
 * Usage: curl http://localhost:3000/api/seed
 *
 * DELETE THIS FILE AFTER SUCCESSFUL SEEDING!
 */

import { NextResponse } from 'next/server';
import { getPayload } from '@/lib/payload';
import { seedAllContent } from '@/scripts/seed-content';

export const dynamic = 'force-dynamic';
export const maxDuration = 300; // 5 minutes for translations

export async function GET() {
  try {
    console.log('🚀 Seed API route called');

    // Get Payload instance
    const payload = await getPayload();

    // Run seeding
    const result = await seedAllContent(payload);

    // Give translations some time to complete
    console.log('\n⏳ Waiting 30 seconds for translation hooks to complete...');
    await new Promise((resolve) => setTimeout(resolve, 30000));

    console.log('\n✅ Seeding complete!');
    console.log('Check the admin panel to verify content in both EN and FR.');

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully!',
      details: result,
      nextSteps: [
        '1. Check admin panel at /admin',
        '2. Verify English content exists for all globals',
        '3. Switch to French locale to verify translations',
        '4. Delete this file: app/api/seed/route.ts',
      ],
    });
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
