import mongoose from 'mongoose';
import { ACLPlugin } from '../acl';
import { SCHEMA_NAMES } from '../constant';

const subjectSchema: mongoose.Schema = new mongoose.Schema({
    owner: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    value: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
})

subjectSchema.plugin(ACLPlugin);

export { subjectSchema };