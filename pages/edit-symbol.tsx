import builder, { BuilderComponent } from "@builder.io/react";
import Head from "next/head";

builder.init('952952d449244a6cb78f4238625d141e');

export default function EditSymbol () {

    return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    
    <BuilderComponent model="symbol" locale="fr "/>
  </>
}