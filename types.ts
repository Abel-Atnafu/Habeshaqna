export type UserRole = 'student' | 'teacher'
export type QuestionStatus = 'open' | 'answered' | 'closed'

export interface Profile {
  id: string
  full_name: string | null
  role: UserRole
  created_at: string
}

export interface Question {
  id: string
  user_id: string
  title: string
  body: string
  is_anonymous: boolean
  status: QuestionStatus
  created_at: string
  updated_at: string
  // Joined fields
  profile?: Profile
  answers_count?: number
  vote_score?: number
  user_vote?: number
}

export interface Answer {
  id: string
  question_id: string
  user_id: string
  body: string
  is_accepted: boolean
  created_at: string
  updated_at: string
  // Joined fields
  profile?: Profile
  vote_score?: number
  user_vote?: number
}

export interface Vote {
  id: string
  user_id: string
  question_id: string | null
  answer_id: string | null
  value: -1 | 1
  created_at: string
}
