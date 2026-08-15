import {createClient} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const sanityConfigured = Boolean(projectId && projectId !== 'seu_project_id')

export const client = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: '2026-08-15',
      useCdn: true,
    })
  : null
