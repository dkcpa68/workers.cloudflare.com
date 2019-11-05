import React from "react"
import { graphql } from "gatsby"

import Feature from "../components/feature"
import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

const flatten = set => set.edges.map(({ node }) => node)

const IndexPage = ({ data: { allSanityFeature, allSanityProject } }) => {
  const features = flatten(allSanityFeature)
  const projects = flatten(allSanityProject)
  const featured = projects.filter(({ featured }) => !!featured)
  const unfeatured = projects.filter(({ featured }) => !featured)

  return (
    <Layout>
      <SEO />

      <div class="ProjectsRow">
        <div class="ProjectsRow--title">
          <h2 class="ProjectsRow--title-content">Built with Workers Sites</h2>
        </div>

        <div class="ProjectsRow--projects">
          {projects.map(project => (
            <div class="ProjectsRow--project">
              <Project project={project} />
            </div>
          ))}

          {/* TODO - remove rendering projects multiple times for testing */}
          {projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}
        </div>
      </div>

      <div class="ProjectsRow">
        <div class="ProjectsRow--title">
          <h2 class="ProjectsRow--title-content">Built with Workers KV</h2>
        </div>

        <div class="ProjectsRow--projects">
          {projects.map(project => (
            <div class="ProjectsRow--project">
              <Project project={project} />
            </div>
          ))}

          {/* TODO - remove rendering projects multiple times for testing */}
          {projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}
        </div>
      </div>

      <div class="ProjectsRow">
        <div class="ProjectsRow--title">
          <h2 class="ProjectsRow--title-content">Built with Workers Sites</h2>
        </div>

        <div class="ProjectsRow--projects">
          {projects.map(project => (
            <div class="ProjectsRow--project">
              <Project project={project} />
            </div>
          ))}

          {/* TODO - remove rendering projects multiple times for testing */}
          {projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}
        </div>
      </div>

      <div class="ProjectsRow">
        <div class="ProjectsRow--title">
          <h2 class="ProjectsRow--title-content">Built with Workers Sites</h2>
        </div>

        <div class="ProjectsRow--projects">
          {projects.map(project => (
            <div class="ProjectsRow--project">
              <Project project={project} />
            </div>
          ))}

          {/* TODO - remove rendering projects multiple times for testing */}
          {projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}{projects.map(project => (<div class="ProjectsRow--project"><Project project={project} /></div>))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  fragment Feature on SanityFeature {
    name
    description
    slug
    image {
      asset {
        fluid(maxWidth: 300) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }

  fragment Project on SanityProject {
    name
    featured
    description
    slug
    image {
      asset {
        fluid(maxWidth: 300) {
          ...GatsbySanityImageFluid
        }
      }
    }
    features {
      name
      slug
    }
  }

  query Homepage {
    allSanityFeature {
      edges {
        node {
          ...Feature
        }
      }
    }
    allSanityProject {
      edges {
        node {
          ...Project
        }
      }
    }
  }
`

export default IndexPage
