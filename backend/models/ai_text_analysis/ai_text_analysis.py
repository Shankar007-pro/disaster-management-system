import openai

openai.api_key = "YOUR_OPENAI_API_KEY"  # Replace securely with your OpenAI key

def analyze_report(text):
    prompt = f"Analyze this disaster report for severity, location, urgency, and needed actions:\n'{text}'"
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response['choices'][0]['message']['content']

if __name__ == "__main__":
    sample_report = "Flooding near river bank in sector 5."
    print(analyze_report(sample_report))
