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

#### Some Tailwind Conventions

- Screen height minimum screen:
  min-h-screen
- Setting custom background color:
  bg-[hsl(185,41%,84%)]
- Putting item in the center of the screen/element
  flex items-center justify-center
- Putting items in the center

- If you want to make your custom properties or utility clases, you can extend the tailwind. confing file:

  theme: {
  extend: {
  colors: {
  'background-main': 'hsl(183,100%,15%)',
  },
  },
  },

- To put one element under another, we use flex-col property
- If you have the input field with the place holder, you can move the text with the text-left/text-center/text-right classes.
