import { Client } from '@notionhq/client';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      organization,
      industry,
      experience,
      resourceDownloaded
    } = body;

    // Initialize Notion client
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });

    // Add lead to Notion database
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        'Name': {
          title: [
            {
              text: {
                content: `${firstName} ${lastName}`,
              },
            },
          ],
        },
        'Email': {
          email: email,
        },
        'Phone': {
          phone_number: phone || '',
        },
        'Organization': {
          rich_text: [
            {
              text: {
                content: organization || '',
              },
            },
          ],
        },
        'Industry': {
          select: {
            name: industry || 'Not specified',
          },
        },
        'Experience': {
          select: {
            name: experience || 'Not specified',
          },
        },
        'Resource Downloaded': {
          rich_text: [
            {
              text: {
                content: resourceDownloaded || 'Contact Form Submission',
              },
            },
          ],
        },
        'Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    // TODO: Send email with PDF if resourceDownloaded is set
    // We'll implement this next

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit form' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
