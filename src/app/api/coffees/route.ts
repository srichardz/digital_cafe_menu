import { HttpStatusCode } from 'axios';
import dbConnect from '../../lib/dbConnect';
import Coffee from '../../models/Coffee';
import { NextRequest, NextResponse } from 'next/server';

export type CreateCoffeeDto = {
    drink_name: string;
    allergen_info: string;
    price: number;
    description: string;
}

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const body: CreateCoffeeDto = await req.json();
        if (body.drink_name) {
            const product = await Coffee.create(body);
            return NextResponse.json(
                { product, message: 'Your product has been created' },
                { status: HttpStatusCode.Created },
            );
        }
        return NextResponse.json({ message: 'Product name is missing' }, { status: HttpStatusCode.BadRequest });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
    }
}
export async function GET() {
    try {
        await dbConnect();
        const coffees = await Coffee.find();
        return NextResponse.json({ data: coffees });
    } catch (error) {
        return NextResponse.json({ error });
    }
}