export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "kategorie",
      title: "Kategorie",
      type: "array",
      of: [{ type: "reference", to: { type: "kategorie" } }],
    },
    {
      title: "Poster",
      name: "poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Popis",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      options: {
        dateFormat: "MM-DD-YYYY",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Dnes",
      },
    },
    {
      name: "metaTitle",
      title: "META Title",
      type: "string",
    },

    {
      name: "metaDescription",
      title: "META Description",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "blockContent",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
