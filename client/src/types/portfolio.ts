export type TupleText = [string, string];
export type Project = { title:string; image:string; role:string; description:string; tags:string[] };
export type ProcessStep = [string,string,string];
export type PackageOffer = { name:string; price:string; description:string; items:string[] };
export type PortfolioData = {
  name:string; role:string; email:string; phone:string; linkedin:string; linkedinUrl:string;
  hero:{title:string; subtitle:string; badge:string; cta1:string; cta2:string};
  stats:TupleText[]; brands:string[]; situations:TupleText[]; services:TupleText[]; projects:Project[]; process:ProcessStep[]; skills:string[]; freelance:TupleText[]; packages:PackageOffer[]; testimonials:TupleText[];
};
