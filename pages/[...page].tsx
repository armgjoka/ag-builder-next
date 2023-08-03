import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import React from "react";
import {
  BuilderComponent,
  builder,
  useIsPreviewing,
  Builder,
} from "@builder.io/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings

builder.init('952952d449244a6cb78f4238625d141e');

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ page: string[] }>) {
  const page = await builder.get('page', {
    userAttributes: {
      urlPath: '/' + (params?.page?.join('/') || ''),
    }
  })
  .toPromise() || null

  return {
    props: {
      page,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true }
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  }
}

export default function Page({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isPreviewing = useIsPreviewing();
  if (!page && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="title"></meta>
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <BuilderComponent model="page" locale="fr"/>
    </>
  )
}