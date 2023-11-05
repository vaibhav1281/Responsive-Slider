# Responsive-Slider

Create your Own Custom React Slider/Carousel with TailwindCSS

First, install the necessary library:

```jsx
npm install react-responsive

```

Then, modify the Slider component like this:


```jsx
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const images = [
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
];

export default function Slider() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const slidesToShow = isDesktopOrLaptop ? 3 : isTablet ? 2 : 1;
  const nextSlide = () => {
    setCurrent(current === length - slidesToShow ? current : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? current : current - 1);
  };

  return (
    <section className="flex items-center justify-center">
      <button className={`p-4 ${current === 0 ? 'bg-gray-300' : 'bg-blue-500'}`} onClick={prevSlide} disabled={current === 0}>Prev</button>
      {images.map((image, index) => (
        <div className={(index >= current && index < current + slidesToShow) ? 'block' : 'hidden'} key={index}>
          <img src={image} alt="slide" className="w-64 h-64" />
        </div>
      ))}
      <button className={`p-4 ${current === length - slidesToShow ? 'bg-gray-300' : 'bg-blue-500'}`} onClick={nextSlide} disabled={current === length - slidesToShow}>Next</button>
    </section>
  );
}
```

In this example, the `useMediaQuery` hook from `react-responsive` is used to determine whether the device is a desktop/laptop, tablet, or mobile. The `slidesToShow` variable is set to 3 for desktops/laptops, 2 for tablets, and 1 for mobiles. The `nextSlide` and `prevSlide` functions and the `map` function are modified to use `slidesToShow` instead of a hard-coded number.

Please note that you need to have Node.js and npm installed on your machine to run this code. If you haven't installed them yet, you can download them from the official [Node.js website](https://nodejs.org/). After installing Node.js and npm, you can create a new React application by running `npx create-react-app my-app` in your terminal. Replace `my-app` with the name of your application. Then, navigate into your new application's directory with `cd my-app`, and start the application with `npm start`. Your application will be available at `http://localhost:3000`.

Remember to replace the contents of `App.js` (or another component file) with the code provided above. You also need to install `tailwindcss`, `postcss`, `autoprefixer`, `@craco/craco`, and `react-responsive` using npm as shown above. If you encounter any issues, please refer to the official [React documentation](https://reactjs.org/docs/getting-started.html), the [Tailwind CSS documentation](https://tailwindcss.com/docs/guides/create-react-app), or the [`react-responsive` documentation](https://www.npmjs.com/package/react-responsive). Happy coding! 😊
