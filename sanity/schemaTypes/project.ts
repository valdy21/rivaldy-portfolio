import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Karya / Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Karya',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Link URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true, // Fitur keren buat nge-crop/geser fokus gambar langsung di dashboard!
      },
    }),
    defineField({
      name: 'category',
      title: 'Kategori Desain',
      type: 'string',
      options: {
        list: [
          { title: 'Vertical Video (TikTok/Reels)', value: 'vertical-video' },
          { title: 'AI Multimedia Content', value: 'ai-multimedia' },
          { title: 'Image Manipulation / Retouching', value: 'image-manipulation' },
          { title: 'Branding & Identity', value: 'branding' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
    }),
  ],
})