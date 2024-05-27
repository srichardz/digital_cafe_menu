import { HttpStatusCode } from 'axios';
import dbConnect from '../../lib/dbConnect';
import Order from '../../models/Order';
import { NextRequest, NextResponse } from 'next/server';

export type CreateOrderDto = {
    drink_name: string;
    allergen_info: number;
    price: number;
    description: string;
}

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const body: CreateOrderDto = await req.json();
        if (body.drink_name) {
            const product = await Order.create(body);
            return NextResponse.json(
                { product, message: 'Your order has been created' },
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
        const orders = await Order.find();
        return NextResponse.json({ data: orders });
    } catch (error) {
        return NextResponse.json({ error });
    }
}

// TODO: this is a template copied from coffees, have to design order template and implement to main page start order btn, same with Order.ts