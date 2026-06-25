import json
import re

transcript_path = "/home/nhatkhuat/.gemini/antigravity-ide/brain/d91d83fb-911a-40ec-b198-6d180c33bc40/.system_generated/logs/transcript.jsonl"
output_path = "conversation_history.md"

with open(transcript_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

with open(output_path, "w", encoding="utf-8") as out:
    out.write("# Lịch sử trò chuyện\n\n")
    for line in lines:
        try:
            data = json.loads(line)
        except json.JSONDecodeError:
            continue
            
        if data.get("type") == "USER_INPUT":
            content = data.get("content", "")
            # Trích xuất nội dung trong <USER_REQUEST>
            match = re.search(r"<USER_REQUEST>\n?(.*?)\n?</USER_REQUEST>", content, re.DOTALL)
            if match:
                user_req = match.group(1).strip()
                if user_req:
                    out.write(f"## 🧑 Bạn\n")
                    out.write(f"{user_req}\n\n")
            
        elif data.get("type") == "PLANNER_RESPONSE":
            content = data.get("content", "")
            if content:
                out.write(f"## 🤖 Antigravity\n")
                out.write(f"{content}\n\n---\n\n")
            
print(f"Exported clean version to {output_path}")
