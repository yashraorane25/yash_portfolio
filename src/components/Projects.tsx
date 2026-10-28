import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    // {
    //   title: 'Prepitus AI Tutoring Platform',
    //   tech: ['React 18', 'Redux Toolkit', 'Node.js/Express', 'AWS', 'Google OAuth', 'Stripe', 'Pinecone', 'PyTorch'],
    //   desc: 'An AI-powered SAT tutoring platform built on a scalable microservices architecture. Features secure Google OAuth & JWT authentication, automated subscription plans via Stripe & AWS EventBridge/Lambda, and a semantic search system over 48 knowledge domains using Sentence Transformers and Pinecone Vector DB. Integrates an LSTM-based Deep Knowledge Tracing model via PyTorch + FastAPI to dynamically predict student mastery and generate personalized flashcards/study plans via OpenAI API.',
    //   github: 'https://github.com/yashraorane25'
    // },
    // {
    //   title: "Movie Recommendation System",
    //   tech: ["Python", "Flask", "scikit-learn", "Pandas", "TMDB Dataset"],
    //   desc: "A content-based movie recommendation platform utilizing a cosine similarity matrix to measure statistical relationships between movies and surface personalized viewer suggestions. Ingests, cleans, and processes metadata from the extensive TMDB 5000 dataset, exposing high-throughput Flask-based REST API endpoints integrated with the ML recommendation engine for frictionless frontend client querying.",
    //   github: "https://github.com/yashraorane25",
    // },
    {
      title: "Payment Settlement & Ledger Service",
      tech: ["Java", "SpringBoot", "Apache Kafka", "Redis", "Junit", "Docker"],
      desc: "I built this project to understand what it takes to keep money movements correct when messages can arrive late, fail, or show up twice. The service accepts payment events and publishes them to Apache Kafka. Consumers then post the ledger entries, and a settlement run closes them out. Because Kafka can deliver the same message more than once, the consumers are idempotent, so a duplicate payment never produces a duplicate transaction or a wrong balance. Messages that fail processing go to a dead-letter queue instead of disappearing, so problem payments can be reviewed. A reconciliation report checks the ledger against the settlement and flags any mismatches. On top of it, a React and TypeScript dashboard, backed by Redis caching, lets you follow each payment from ingestion to settlement and see mismatches as they surface. The backend is written in Java with Spring Boot, packaged with Docker, and tested with JUnit 5.",
      github: "https://github.com/yashraorane25/ledger-flow",
    },
    {
      title: "Multi-Agent Content Orchestration & Benchmarking",
      tech: ["Python", "LangChain", "LangGraph", "Pydantic", "LLM"],
      desc: "I built this project to test whether a team of specialized LLM agents can write better content than a single prompt, and to measure what that extra complexity costs. The pipeline uses LangGraph to coordinate five agents in a loop. A Writer drafts, an Editor reviews the draft against a strict Pydantic rubric, and the draft goes back for revision until it hits a quality threshold or a maximum number of iterations. Before anything is published, a dedicated Fact-Checker breaks the draft into individual claims and checks each one against live web search results, which cuts down on unsupported statements. To see whether the design was worth it, I benchmarked it against a single-prompt baseline, comparing latency, token cost, and quality, with a blind LLM-as-a-judge scoring the outputs without knowing which system produced them.",
      github:'https://github.com/yashraorane25/content_pipeline_multi_agent'
    },
  ];

  return (
    <Box id="projects" sx={{ py: 10 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ mb: 6 }}
        component={motion.h3}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "background.paper",
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  {project.title}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}
                >
                  {project.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: "rgba(99, 102, 241, 0.05)",
                        color: "secondary.main",
                        fontWeight: 600,
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </Stack>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {project.desc}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 4, pt: 0 }}>
                {project.github && (
                  <Button
                    startIcon={<Github size={18} />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "text.primary" }}
                  >
                    View Code
                  </Button>
                )}
                {"demo" in project && (project as any).demo && (
                  <Button
                    startIcon={<ExternalLink size={18} />}
                    href={(project as any).demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "secondary.main" }}
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
