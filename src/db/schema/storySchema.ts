import mongoose from 'mongoose';
import { ACLPlugin } from '../acl';
import { SCHEMA_NAMES } from '../constant';

const storySchema: mongoose.Schema = new mongoose.Schema({
    owner: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    approved:{
        type: mongoose.SchemaTypes.String,
        required: false,
    },
    summary:{
        type: mongoose.SchemaTypes.String,
        required: false,
    },
    source:{
        type: mongoose.SchemaTypes.String,
        required: false,
    },
    subject:[{
            type: mongoose.SchemaTypes.ObjectId,
        required: false,
        ref: SCHEMA_NAMES.SUBJECTS,
        populate: true,
    }],
})

storySchema.plugin(ACLPlugin);

export { storySchema };