import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    id: { type: String, required: true},
    title: { type: String, required: true},
    author: Array,
    description: String,
    categories: Array,
    publishedDate: String,
    pageCount: Number,
    averageRating: Number,
    city: { type: String, required: true},
    format: { type: String, required: true},
    imageLinks: { type: String, required: true},
    industryIdentifiers: Array,
    copies: Number,
});

export interface Book extends mongoose.Document {
    id: string;
    title: string;
    author: string;
    description: string;
    categories: string;
    publishedDate: string;
    pageCount: number;
    averageRating: number;
    city: string;
    format: string;
    imageLinks: string;
    industryIdentifiers: [{type: string, identifier: string}, {type: string, identifier: string}];
    copies: number;
}
