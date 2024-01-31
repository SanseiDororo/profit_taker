### Initialisation of the app

pnpx create-next-app latest .

This is src based app using TypeScript and Tailwind CSS. App router is used.

#### Preparation

- Remove all the content from the page.tsc
- Remove all the definitions from the globals.css. Leave the following

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

* Create assets folder

#### Change font

Go to layout page. The default font family is inter. Import another font, change constant as for example:

const space_mono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

In the body change:

<body className={space_mono.className}>{children}</body>

#### Assets

- pnpm install react-icons
