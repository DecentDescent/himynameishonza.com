export default {
  name: "povidky",
  title: "Povídky",
  type: "document",
  fields: [
    {
      name: "categoryName",
      title: "Kategorie",
      type: "string",
      readOnly: true,
    },
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
      title: "Poster",
      name: "poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "attribution",
          type: "string",
          title: "Autor",
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
      name: "facebookComments",
      title: "Komentáře",
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
  initialValue: {
    categoryName: "Povídky",
  },
};
