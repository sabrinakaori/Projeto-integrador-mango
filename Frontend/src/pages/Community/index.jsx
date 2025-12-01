import { useEffect, useState } from "react";
import Header from "../../components/Header/Index.jsx";
import Navbar from "../../components/Navbar/Index.jsx";
import Footer from "../../components/Footer/Index.jsx";
import img1 from "../../assets/img/Pfp.jpg";

// Cores baseadas na imagem - usando hex para precisão
const BG_DARK = "bg-[#1b1b1b]";
const BG_CARD = "bg-[#1a1a2e]";
const BG_BUTTON_PRIMARY = "bg-[#555555]";
const BG_BUTTON_PRIMARY_HOVER = "hover:bg-[#9c9c9c]";
const BG_BUTTON_SECONDARY = "bg-[#2d3748]";
const BG_BUTTON_SECONDARY_HOVER = "hover:bg-[#9c9c9c]";
const TEXT_PRIMARY = "text-[#ffffff]";
const TEXT_SECONDARY = "text-[#6e6e6e]";
const BORDER_COLOR = "border-[#2d3748]";
const ICON_COLOR = "text-[#9f7aea]";

const initialPosts = [
  {
    id: 1,
    user: 'Usuario123',
    handle: '@usuario123456789',
    avatar: 'src/assets/img/icone_usuario.jpg',
    content: 'Amo escutar techno... muito bom... muito bom...',
  },
  {
    id: 2,
    user: 'AND ONE',
    handle: '@ANDONEOFFICIAL',
    avatar: 'src/assets/img/andone.jpg',
    content: 'Deutschmaschine (Live in Hamburg 2006)',
    image: 'src/assets/img/deutschmaschine.jpg',
  },
  {
    id: 3,
    user: 'sofia',
    handle: '@qkthr_011',
    avatar: 'src/assets/img/3.png',
    content: 'eu gosto de escutar',
  },
  {
    id: 4,
    user: 'commentedireadieeu',
    handle: '@commentedireadieeu',
    avatar: 'src/assets/img/commentedireadieeu.jpg',
    content: 'Hello World!',
  },
  {
    id: 5,
    user: 'TersisWilvin',
    handle: '@TersisWilvin',
    avatar: 'src/assets/img/6.png',
    content: 'zantac - power slide',
    image: 'src/assets/img/power.jpg',
  },
  {
    id: 6,
    user: 'ilodoso185302256',
    handle: '@doso555',
    content: 'eu odeio este lugar !!!!!!!!!!!!!',
    avatar: 'src/assets/img/5.png',
  },
  {
    id: 7,
    user: 'Diabarha',
    handle: '@diabarha',
    avatar: 'src/assets/img/diabarha.jpg',
    content: 'Diabarha - Uranoid (2010)',
    image: 'src/assets/img/uranoid.png',
  },
  {
    id: 8,
    user: 'Figurine',
    handle: '@figurineband',
    avatar: 'src/assets/img/sdasdsadasdas.jpg',
    content: 'The Heartfelt (2005)',
    image: 'src/assets/img/a2480777483_16.jpg',
  },
  {
    id: 9,
    user: '180db_[130]',
    handle: '@180db',
    avatar: 'src/assets/img/3.png',
    content: 'este album é inovador e uma experiência surreal. é algo que pelo menos uma vez na vida a pessoa tem que experimentar',
  },
];

const Post = ({ post }) => (
  <div className={`border-t ${BORDER_COLOR} pt-4 mb-6`}>
    <div className="flex space-x-3">
      <img src={post.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <p className={`font-semibold ${TEXT_PRIMARY}`}>
          {post.user}{' '}
          <span className={`text-sm font-normal ${TEXT_SECONDARY}`}>
            {post.handle}
          </span>
        </p>
        <p className={`mt-1 text-sm ${TEXT_PRIMARY}`}>{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt={`Imagem do Post ${post.id}`}
            className="w-full rounded-lg shadow-md mt-3"
            style={{ maxWidth: '500px' }}
          />
        )}
      </div>
    </div>
  </div>
);

export default function Comunidade() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className={`ml-64 mt-[76px] p-8 pb-28 ${BG_DARK} min-h-screen`}>
        <div className="max-w-4xl mx-auto">
          {/* Coluna Principal */}
          <div className="flex-1">
            {/* Cabeçalho da Comunidade */}
            <div className="mb-8">
              <div className={`flex items-center space-x-3 text-xl font-bold ${TEXT_PRIMARY} mb-2`}>
                <a href="#" className={`${ICON_COLOR} hover:text-[#b794f4] transition-colors`}>
                  <i className="fas fa-chevron-left text-lg"></i>
                </a>
                <span>Techno</span>
              </div>
              <p className={`text-sm ${TEXT_SECONDARY} mb-4`}>
                2.271 membros - 3.835 offline - 4.433 ativos
              </p>
              <div className="flex space-x-3">
                <a href="/Msg">
                  <button
                    className={`px-6 py-2 rounded-full ${TEXT_PRIMARY} font-semibold transition-colors duration-300 ${BG_BUTTON_PRIMARY} ${BG_BUTTON_PRIMARY_HOVER}`}
                  >
                    Chat da Comunidade
                  </button>
                </a>
                <button
                  onClick={handleFollowToggle}
                  className={`px-6 py-2 rounded-full ${TEXT_PRIMARY} font-semibold transition-colors duration-300 ${
                    isFollowing
                      ? `${BG_BUTTON_SECONDARY} ${BG_BUTTON_SECONDARY_HOVER}`
                      : `${BG_BUTTON_PRIMARY} ${BG_BUTTON_PRIMARY_HOVER}`
                  }`}
                >
                  {isFollowing ? 'Seguindo' : 'Seguir'}
                </button>
              </div>
            </div>

            {/* Lista de Posts */}
            <div className="space-y-6">
              {initialPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}