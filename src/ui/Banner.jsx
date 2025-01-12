function StyledBanner({ content }) {
  return (
    <div className="relative w-full h-full z-10 overflow-hidden">
      <div className="relative w-full h-full flex transition-transform duration-300 ease-in-out">
        <div className="flex-shrink-0 w-full h-full relative">
          <a href={content.href} className="text-gray-700 no-underline">
            <picture>
              <img
                src={content.src}
                data-src={content.src}
                alt="Khai trương VNB Phú Mỹ"
                className="w-full h-auto max-w-full align-middle"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  );
}

export default StyledBanner;
