import kafka from './client.js';

async function createTopic(){
    try {
        const admin = kafka.admin();
        console.log('admin connecting')
        await admin.connect();
        console.log('admin connected');
        await admin.createTopics({
            topics: [{ topic: 'test', numPartitions: 2 }]
        });
        console.log('Topic created successfully');
        await admin.disconnect();
        console.log('admin disconnected');
    } catch (error) {
        console.error('Error creating topic:', error.message);
    }
}
createTopic();