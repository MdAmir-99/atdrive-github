import mongoose,{Document,Model,Schema} from 'mongoose';

export interface IUser extends Document {
    userProfile: string;
    userId: number;
    profileImage: string;
    url: string;
    repoUrl: string;
}

const userSchema: Schema<IUser>=new mongoose.Schema({
    userProfile: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        unique: true
    },
    profileImage: String,
    url: String,
    repoUrl: String
},{timestamps: true});

const userModel: Model<IUser>=mongoose.model('User',userSchema);
export default userModel;