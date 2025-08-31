
export interface NavLink {
  name: string;
  path: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}
