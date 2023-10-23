// Step 1: Define the Interface our System Expects
interface IMessageClient {
    sendMessage(channel: string, user: string, message: string): void;
  }
  
  // Step 2: Implement Slack Client (Adaptee)
  class SlackClient {
    postMessageToUserInChannel(channel: string, user: string, message: string) {
      console.log(`Posting message to ${user} in ${channel} through Slack: ${message}`);
    }
  }
  
  // Step 3: Implement Slack Adapter
  class SlackAdapter implements IMessageClient {
    constructor(private slackClient: SlackClient) {}
    
    sendMessage(channel: string, user: string, message: string): void {
      this.slackClient.postMessageToUserInChannel(channel, user, message);
    }
  }
  
  // Step 4: Implement MS Teams Client (Adaptee)
  class MSTeamsClient {
    postToChannel(channel: string, message: string) {
      console.log(`Posting message to ${channel} through MS Teams: ${message}`);
    }
  }
  
  // Step 5: Implement MS Teams Adapter
  class MSTeamsAdapter implements IMessageClient {
    constructor(private msTeamsClient: MSTeamsClient) {}
  
    sendMessage(channel: string, user: string, message: string): void {
      this.msTeamsClient.postToChannel(channel, `${message} (sent to ${user})`);
    }
  }
  
  // Step 6: Use the Adapters in Our System
  const slackClient = new SlackClient();
  const slackAdapter = new SlackAdapter(slackClient);
  
  const msTeamsClient = new MSTeamsClient();
  const msTeamsAdapter = new MSTeamsAdapter(msTeamsClient);
  
  slackAdapter.sendMessage('general', 'alice', 'Hello, Alice!');
  msTeamsAdapter.sendMessage('general', 'bob', 'Hello, Bob!');