import openai

openai.api_key = "YOUR_OPENAI_API_KEY"  # Replace with your actual key securely

def analyze_report(text):
    prompt = f"Analyze this disaster report for severity, location, urgency, and assistance requested:\n'{text}'"
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response['choices'][0]['message']['content']

if __name__ == "__main__":
    sample_text = "Flooding near river bank in sector 5."
    analysis = analyze_report(sample_text)
    print("Analysis:", analysis)
