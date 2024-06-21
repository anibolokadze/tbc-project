import { useState } from "react";
import Head from "next/head";
import Layout from "../layout";
import Image from "next/image";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { useCartContext } from "../../context/CartContext";
import style from "./ProductDetails.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../types";
import { toast } from "react-toastify";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const shareUrl = window.location.href;
  const notify = (productName: string) =>
    toast.success(`${productName} added to cart`);

  const { addItem } = useCartContext();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: parseFloat(product.price),
      image: product.thumbnail_link,
    });
    notify(product.title);
  };

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % product.image_links.split(",").length
    );
  };

  const prevImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.image_links.split(",").length) %
        product.image_links.split(",").length
    );
  };

  const renderStars = (rating: number) => {
    const roundedRating = Math.floor(rating);
    return (
      <div className={style.stars}>
        {Array.from({ length: roundedRating }).map((_, index) => (
          <FontAwesomeIcon icon={faStar} key={index} className={style.faStar} />
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.thumbnail_link} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="product" />
      </Head>

      <article className={style.container}>
        <div className={style.basicInfo}>
          <div className={style.mainImageContainer}>
            <Image
              height={500}
              width={500}
              className={style.mainImage}
              src={product.image_links.split(",")[0]}
              alt={product.title}
              onClick={() => openModal(0)}
            />
          </div>
          <div className={style.thumbnailContainer}>
            {product.image_links
              .split(",")
              .map((image: string, index: number) => (
                <div key={index} className={style.thumbnailWrapper}>
                  <Image
                    height={150}
                    width={150}
                    src={image}
                    alt={`${product.title} - ${index + 1}`}
                    onClick={() => openModal(index)}
                    className={style.thumbnail}
                  />
                </div>
              ))}
          </div>
          <div className={style.overeview}>
            <h1 className={style.title}>{product.title}</h1>
            <span>
              rating:
              <p className={style.ratingStars}>{renderStars(product.rating)}</p>
            </span>
            <p className={style.price}>${product.price}</p>
            <div>
              <div className={style.share}>
                <p>share to social media:</p>
                <div className={style.shareIcons}>
                  <FacebookShareButton
                    url={shareUrl}
                    title={product.title}
                    hashtag={"#tech"}
                  >
                    <FacebookIcon size={36} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    title={product.title}
                    hashtags={["tech"]}
                  >
                    <TwitterIcon size={36} round />
                  </TwitterShareButton>
                </div>
              </div>

              <button onClick={handleAddToCart} className={style.button}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className={style.specificationsContainer}>
          <h2 className={style.specificationsTitle}>specifications</h2>
          <table className={style.specificationsTable}>
            <tbody>
              <tr>
                <th>category</th>
                <td>{product.category}</td>
              </tr>
              <tr>
                <th>description</th>
                <td>{product.description}</td>
              </tr>
              <tr>
                <th>brand</th>
                <td>{product.brand}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      {isModalOpen && (
        <div className={style.modalBackdrop} onClick={closeModal}>
          <div className={style.modalContent}>
            <button className={style.closeButton} onClick={closeModal}>
              &times;
            </button>
            <div className={style.modalImageContainer}>
              <Image
                height={500}
                width={500}
                src={product.image_links.split(",")[selectedImageIndex]}
                alt={product.title}
              />
            </div>
            <div className={style.thumbnailContainer}>
              <button className={style.prevButton} onClick={prevImage}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              </button>

              <button className={style.nextButton} onClick={nextImage}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
