import { Schema, model, Document } from "mongoose";

export interface CustomerInterface extends Document {
  collectionName: string;
  type: string;
  discordChannelId: string;
  mintAddress: string;
  hasBuyer: boolean;
  hasDate: boolean;
  hasTime: boolean;
  hasDetails: boolean;
  hasBuyerLink: boolean;
  hasSellerLink: boolean;
  list: object;
  // Twitter
  hasTwitter: boolean;
  accessToken?: string;
  accessTokenSecret?: string;
  consumerKey?: string;
  consumerSecret?: string;
  twitterText?: string;
}

const CustomerSchema = new Schema(
  {
    collectionName: { type: String, required: true },
    type: { type: String, required: true },
    discordChannelId: { type: String, required: true },
    mintAddress: { type: String, required: true },
    hasBuyer: { type: Boolean, default: false },
    hasDate: { type: Boolean, default: false },
    hasTime: { type: Boolean, default: false },
    hasDetails: { type: Boolean, default: false },
    hasBuyerLink: { type: Boolean, default: false },
    hasSellerLink: { type: Boolean, default: false },
    list: { type: Object },
    //Twitter
    hasTwitter: { type: String },
    accessToken: { type: String },
    accessTokenSecret: { type: String },
    consumerKey: { type: String },
    consumerSecret: { type: String },
    twitterText: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model<CustomerInterface>("Customer", CustomerSchema);
