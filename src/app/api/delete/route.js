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

    // Extract the 'name' field from the request
    // const { name } = request.body;
    console.log("request.nextUrl.search", request.nextUrl.search)
    const name = request.nextUrl.search.replace("?=query","")
    console.log("deleting from db", name)


    let deleteResult;

    try {
        // Delete the document with the specific 'name'
        deleteResult = await collection.deleteOne({ name });
        console.log("Deleted count:", deleteResult.deletedCount);
    } catch (err) {
        console.log("error", err);
        return NextResponse.json({
            message: "Failed to delete",
            error: err.message,
            status: 500,
        });
    }

    if (deleteResult.deletedCount === 1) {
        return NextResponse.json({
            message: `Document with name ${name} successfully deleted`,
            status: 200,
        });
    } else {
        return NextResponse.json({
            message: `Document with name ${name} not found`,
            status: 404,
        });
    }
}
