import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://hroussel96:JzP3VjuhR5Ndn4Tb@cluster0.banti7q.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'portella';

export async function GET(request) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('courses');
  console.log("Connected to the database");

  let documentNames = [];

  try {
    // Fetch all documents from the courses collection
    const documents = await collection.find({}).toArray();

    // Extract the 'name' field from each document
    documentNames = documents.map(doc => doc.name);
    console.log("Retrieved names:", documentNames);
  } catch (err) {
    console.log("error", err);
  }

  return NextResponse.json({
    body: documentNames,
    status: 200,
  });
}
