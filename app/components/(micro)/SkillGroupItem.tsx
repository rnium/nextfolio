
const SkillGroupItem = (
  {
    groupData,
  }: {
    groupData: SkillGroup,
  }
) => {
  return (
    <div
      className="border border-slate-400"
    >
      <div className="p-2 font-semibold">
        {groupData.title}
      </div>
      <div
        className="p-2 border-t border-slate-400 text-slate-400"
      >
        {groupData.skills.join(", ")}
      </div>
    </div>
  )
}

export default SkillGroupItem