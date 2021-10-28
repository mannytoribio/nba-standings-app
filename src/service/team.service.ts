import { getTeamCollection } from "../gateway/mongo"
import { Team } from "../model/team.model"

export const createTeam = async (team: Team) => {
  const col = await getTeamCollection()
  await col.insertOne(team)
}

export const getAllTeams = async () => {
  const col = await getTeamCollection()
  const teams =col.find({}).toArray()

  return teams
}