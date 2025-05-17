import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Download,
  Smartphone,
  Shield,
  BarChart2,
  MessageSquare,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 relative">
            <Image src="/splash-icon.png" alt="SkinWise Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold">SkinWise</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-[#2CFBCD] transition">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-[#2CFBCD] transition">
            How it Works
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-[#2CFBCD] transition">
            Testimonials
          </Link>
          <Link href="#faq" className="text-gray-300 hover:text-[#2CFBCD] transition">
            FAQ
          </Link>
        </div>
        <Button className="bg-[#2CFBCD] text-gray-950 hover:bg-[#2CFBCD]/90">Download App</Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2CFBCD]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2CFBCD]/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your <span className="text-[#2CFBCD]">AI-Powered</span> Skincare Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Analyze your skin, get personalized recommendations, and achieve healthier, more beautiful skin with
              SkinWise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#2CFBCD] text-gray-950 hover:bg-[#2CFBCD]/90 px-8">
                Download Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-400 mt-2">For users 13 years and older</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2CFBCD]/20 to-transparent rounded-3xl filter blur-xl -z-10"></div>
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-4 shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="SkinWise App Interface"
                width={300}
                height={600}
                className="rounded-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-6 bg-gray-900/80">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 p-4 border border-amber-500/30 rounded-lg bg-amber-500/10">
            <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0" />
            <p className="text-amber-100 text-sm">
              <strong>Medical Disclaimer:</strong> SkinWise provides informational skin-wellness assessments only and
              does not constitute medical advice, diagnosis, or treatment. Please consult a qualified dermatologist for
              medical concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              SkinWise combines cutting-edge AI technology with dermatological expertise to provide you with the best
              skincare guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <div className="h-8 w-8 text-[#2CFBCD] relative">
                    <Image src="/icon.png" alt="AI Icon" fill className="object-contain" />
                  </div>
                ),
                title: "AI-Powered Skin Analysis",
                description:
                  "Get detailed insights about your skin type, conditions, and concerns using advanced AI technology.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-[#2CFBCD]" />,
                title: "Personalized Treatment Plans",
                description:
                  "Receive customized skincare routines and recommendations based on your unique skin profile.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-[#2CFBCD]" />,
                title: "Product Recommendations",
                description: "Discover products specifically selected for your skin needs and concerns.",
              },
              {
                icon: <BarChart2 className="h-8 w-8 text-[#2CFBCD]" />,
                title: "Progress Tracking",
                description: "Monitor improvements in your skin health over time with detailed analytics.",
              },
              {
                icon: <Smartphone className="h-8 w-8 text-[#2CFBCD]" />,
                title: "User-Friendly Interface",
                description: "Simple, intuitive design makes skincare analysis accessible to everyone.",
              },
              {
                icon: <Shield className="h-8 w-8 text-[#2CFBCD]" />,
                title: "Secure & Private",
                description: "Your photos are processed securely and not stored in our database.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-gray-900/80 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Getting started with SkinWise is easy. Follow these simple steps to begin your journey to healthier skin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Take a Photo",
                description: "Capture or upload clear photos of your face using the app's camera interface.",
              },
              {
                step: "02",
                title: "AI Analysis",
                description: "Our advanced AI analyzes your skin conditions, identifying concerns and issues.",
              },
              {
                step: "03",
                title: "Get Recommendations",
                description: "Receive personalized skincare routines and product recommendations.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -z-10 top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#2CFBCD]/5 rounded-full filter blur-3xl"></div>
                </div>
                <div className="border border-gray-800 bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 h-full">
                  <div className="text-4xl font-bold text-[#2CFBCD]/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Take a peek at SkinWise's intuitive interface and powerful features.
            </p>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 px-4 -mx-4 scrollbar-hide">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex-shrink-0 w-64 md:w-72">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-3 shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=280&text=Screen ${item}`}
                    alt={`App Screenshot ${item}`}
                    width={280}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Thousands of users have transformed their skincare routine with SkinWise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                avatar: "/placeholder.svg?height=80&width=80",
                text: "SkinWise completely changed my skincare routine. The personalized recommendations helped clear my acne in just weeks!",
              },
              {
                name: "Michael T.",
                avatar: "/placeholder.svg?height=80&width=80",
                text: "As someone who knew nothing about skincare, this app has been a lifesaver. Simple to use with amazing results.",
              },
              {
                name: "Emma L.",
                avatar: "/placeholder.svg?height=80&width=80",
                text: "The progress tracking feature keeps me motivated. I can actually see how my skin is improving over time!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <div className="flex text-[#2CFBCD]">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Find answers to common questions about SkinWise.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How accurate is the skin analysis?",
                answer:
                  "SkinWise uses advanced AI algorithms to provide highly accurate skin analysis. However, please note that our service provides informational skin-wellness assessments only and does not constitute medical advice, diagnosis, or treatment.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Absolutely. We take your privacy seriously. Your facial images are transmitted to a third-party analyzer (currently OpenAI API) for processing and are not stored in our database. The third party may securely store the images for up to 30 days for the purpose of delivering results, after which they are deleted.",
              },
              {
                question: "Do I need to pay for the app?",
                answer:
                  "SkinWise offers both free and premium versions. The free version provides basic skin analysis, while the premium subscription unlocks advanced features. We offer a 100% money-back guarantee to eligible users who are dissatisfied with a paid feature, provided the refund request is made within 7 days of the transaction.",
              },
              {
                question: "Is there an age requirement to use SkinWise?",
                answer:
                  "Yes, you must be at least 13 years of age or the minimum age of digital consent in your jurisdiction, whichever is higher. The Services are not directed to children under 13.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -z-10 top-0 right-0 w-full h-full">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#2CFBCD]/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey to Healthier Skin Today</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of satisfied users who have transformed their skin with SkinWise.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="bg-[#2CFBCD] text-gray-950 hover:bg-[#2CFBCD]/90 px-8">
                  <Download className="mr-2 h-5 w-5" /> Download Now
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                By downloading, you agree to our{" "}
                <Link
                  href="https://iyoibxwrozzppmzhckut.supabase.co/storage/v1/object/public/public-assets//SkinWise_Terms_of_Service.txt"
                  className="text-[#2CFBCD] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="https://iyoibxwrozzppmzhckut.supabase.co/storage/v1/object/public/public-assets//privacypolicy.txt"
                  className="text-[#2CFBCD] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 relative">
                  <Image src="/splash-icon.png" alt="SkinWise Logo" fill className="object-contain" />
                </div>
                <span className="text-xl font-bold">SkinWise</span>
              </div>
              <p className="text-gray-400">Your AI-powered skincare assistant for healthier, more beautiful skin.</p>
              <p className="text-gray-500 text-sm mt-2">
                SkinWise Sole Proprietorship
                <br />
                Zhetisu region, Tokzhailau, Kazakhstan
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-[#2CFBCD]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-[#2CFBCD]">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-[#2CFBCD]">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-[#2CFBCD]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://iyoibxwrozzppmzhckut.supabase.co/storage/v1/object/public/public-assets//privacypolicy.txt"
                    className="text-gray-400 hover:text-[#2CFBCD]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://iyoibxwrozzppmzhckut.supabase.co/storage/v1/object/public/public-assets//SkinWise_Terms_of_Service.txt"
                    className="text-gray-400 hover:text-[#2CFBCD]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">contact@skinwiseai.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SkinWise. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">
              For users 13 years and older. Not intended for medical diagnosis or treatment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
