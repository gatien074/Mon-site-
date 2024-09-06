// pages/index.js
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Moanda Campus</title>
        <meta name="description" content="Explorez notre campus de Moanda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Image */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/600x200')" }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">Explorer notre campus de Moanda</h1>

        {/* Notre parcours Section */}
        <div className="flex mb-8">
          <div className="w-1/2">
            <h2 className="text-xl font-bold mb-2">Notre parcours</h2>
            <Image src="https://placehold.co/600x400" alt="Group of people standing in front of a building" width={600} height={400} />
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-xl font-bold mb-2">Histoire</h2>
            <p>Le parcours de l'école EST, depuis 2012, nous l'avons bâti en choisissant de nous concentrer sur l'essentiel : la qualité de nos formations et l'accompagnement de nos étudiants.</p>
            <p>Nous avons ainsi formé plus de 1000 étudiants, dont plus de 95% sont aujourd'hui en poste dans des entreprises de renom.</p>
            <p>Nous croyons que l'impact de l'éducation est fondamental, et nous nous efforçons de donner à nos étudiants les clés pour réussir dans leur vie professionnelle et personnelle.</p>
          </div>
        </div>

        {/* Visitez notre campus Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Visitez notre campus</h2>
          <div className="flex justify-center space-x-4">
            <Image src="https://placehold.co/200x200" alt="Student studying on campus" width={200} height={200} />
            <Image src="https://placehold.co/200x200" alt="Campus building" width={200} height={200} />
            <Image src="https://placehold.co/200x200" alt="Students in a classroom" width={200} height={200} />
          </div>
        </div>

        {/* Notre Galerie Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-2">Notre Galerie</h2>
          <div className="bg-black h-64"></div>
        </div>

        {/* Contactez-nous Section */}
        <div className="flex">
          <div className="w-1/2 pr-4">
            <h2 className="text-xl font-bold mb-2">Contactez-nous</h2>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Nom" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
              </div>
              <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Envoyer</button>
            </form>
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-xl font-bold mb-2">Nos informations</h2>
            <p className="text-sm mb-2"><i className="fas fa-phone-alt"></i> +221 77 123 45 67</p>
            <p className="text-sm mb-2"><i className="fas fa-envelope"></i> contact@ecoleest.com</p>
            <p className="text-sm mb-2"><i className="fas fa-map-marker-alt"></i> Rue de l'école, Dakar, Sénégal</p>
            <Image src="https://placehold.co/400x300" alt="Map showing the location of the school" width={400} height={300} className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
