import FontFaceObserver from 'fontfaceobserver';

interface IFonts {
  family: string;
  url: string;
}

const importFont = ({ family, url }: IFonts) =>
  new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';

    const classPrefix: string = family.toLowerCase().replace(/\s/g, '-') + '-';

    document.documentElement.classList.add(classPrefix + 'loading');
    document.head.appendChild(link);

    const font = new FontFaceObserver(family);

    font
      .load()
      .then(() => {
        document.documentElement.classList.remove(classPrefix + 'loading');
        document.documentElement.classList.add(classPrefix + 'loaded');
        resolve();
      })
      .catch(err => reject(err));
  });

export default importFont;
