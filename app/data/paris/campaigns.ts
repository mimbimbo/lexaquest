import { bakeryCampaign } from "./bakeryCampaign";
import { placeDesVosgesCampaign } from "./placeDesVosgesCampaign";

export type ParisCampaignId = "bakery" | "place-des-vosges";

export const parisCampaigns = {
  bakery: bakeryCampaign,
  "place-des-vosges": placeDesVosgesCampaign,
};

export const parisCampaignList = [
  {
    id: "bakery",
    title: bakeryCampaign.title,
    description: bakeryCampaign.description,
    emoji: "🥖",
    mapLabel: "Boulangerie",
  },
  {
    id: "place-des-vosges",
    title: placeDesVosgesCampaign.title,
    description: placeDesVosgesCampaign.description,
    emoji: "🏛️",
    mapLabel: "Place des Vosges",
  },
] satisfies {
  id: ParisCampaignId;
  title: string;
  description: string;
  emoji: string;
  mapLabel: string;
}[];