import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
 

const url = 'mongodb+srv://hroussel96:JzP3VjuhR5Ndn4Tb@cluster0.banti7q.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'portella';


export async function GET(request) {

  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('courses');
  console.log("hello world db");


  try {
    // Insert a new document into the courses collection
    const result = await collection.insertOne({ name: "eggs" });
    if (result.insertedCount > 0) {
      console.log("Document was inserted");
    } else {
      console.log("Failed to insert document");
    }
  } catch (err) {
    console.log("error", err);
  }
 


  return NextResponse.json(
    {
      body: "Hello World",},
    {
      status: 200,
    },
  );
}