import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Biblily</h1>
            <p className="text-xl text-muted-foreground mx-auto">
              Your trusted source for e-book recommendations since 2025.
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>
                Biblily was founded with a simple mission: to help readers discover their next favorite e-book. 
                In a world overflowing with content, finding the right book can be overwhelming. That's where we come in.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                At Biblily, our mission is to simplify the digital reading experience by helping users discover e-books that align with their unique interests and preferences. In an era of information overload, we aim to make personalized book discovery seamless, efficient, and rewarding.
              </p>
              
              <h2>What Sets Us Apart</h2>
              <p>
              Biblily is committed to delivering meaningful recommendations not just popular titles. Our platform leverages advanced machine learning algorithms alongside human editorial insight to identify books that align with each user's reading style, thematic interests, and engagement patterns.
              </p>
              
              <h2>Join Our Community</h2>
              <p>
              Beyond discovery, Biblily fosters a dynamic and engaged reading community. Our platform enables users to share reviews, participate in discussions, and explore diverse perspectives—enhancing both individual and collective reading experiences.
              </p>
              
              <h2>Our Team</h2>
              <p>
                We're a diverse team of book enthusiasts, data scientists, and developers working together to create 
                the best e-book discovery platform. Our combined expertise in literature and technology allows us to 
                bridge the gap between readers and their next great read.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}