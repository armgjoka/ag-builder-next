import builder, { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import Head from "next/head";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";

builder.init('952952d449244a6cb78f4238625d141e');

export default function EditSymbol () {

  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isPreviewing = useIsPreviewing();
/*   if (!isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  } */

  console.log('ARMELA EDIT SYMBOL');

    return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    
    <BuilderComponent model="symbol"  locale= "al"/>
  </>
}