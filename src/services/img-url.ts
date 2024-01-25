const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf('media/') + 'media/'.length;
  const x = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  console.log(x);
  return x;
};

export default getCroppedImageUrl;
