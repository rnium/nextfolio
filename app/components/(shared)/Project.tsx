import Image from "next/image";
import { Box, Stack } from "@mui/material";


const Project = ({ data }: { data: ProjectData }) => {
  return (
    <Box
      className="border border-slate-400 relative"
    >
      <Image
        src={data.banner}
        placeholder="blur"
        alt={data.title}
      />
      <div className="border-t border-b border-slate-400 py-2 px-2 text-slate-400">
        {data.techstack}
      </div>
      <Stack
        className="px-5 py-4"
        spacing={2}
      >
        <div className="max-sm:text-xl text-2xl font-semibold">{data.title}</div>
        <div className="text-slate-400">
          {data.description}
        </div>

        <Stack
          direction="row"
          spacing={3}
        >
          {
            data?.liveurl && (
              <a
                href={data.liveurl}
                target="_blank"
                className="btn-primary"

              >
                Live &lt;~&gt;
              </a>
            )
          }
          {
            data?.github && (
              <a
                href={data.github}
                target="_blank"
                className="px-3 text-slate-400 py-2 border border-slate-400 hover:bg-slate-400/10"

              >
                Github &lt;=
              </a>
            )
          }
        </Stack>

      </Stack>
    </Box>
  )
}

export default Project