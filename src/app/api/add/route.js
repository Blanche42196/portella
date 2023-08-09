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

    // Extract the data from the request body
    const name = request.nextUrl.search.replace("?=query","")
    console.log("adding to db", name)

    try {
        // Insert the document with the provided data
        await collection.insertOne({ name });
        console.log("Document added:", name);
    } catch (err) {
        console.log("error", err);
        return NextResponse.json({
            message: "Failed to add document",
            error: err.message,
            status: 500,
        });
    }

    return NextResponse.json({
        message: `Document with name ${name} successfully added`,
        status: 200,
    });
}
