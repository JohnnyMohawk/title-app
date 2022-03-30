import mongoose from 'mongoose'

const Schema = mongoose.Schema

const titleSchema = new Schema({
    title_text: {
        type: String,
        required: true
    },
    is_fav_title: {
        type: Boolean,
        default: false,
    },
    title_author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })

const postSchema = new Schema({
    image_path: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: false
    },
    fav_title_set: {
        type: Boolean,
        default: false
    },
    added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    titles: [titleSchema]
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export {
    Post
}