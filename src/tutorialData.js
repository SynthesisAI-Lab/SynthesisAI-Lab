// Preload tutorial images via Vite glob so they are included in the build and work with a dynamic lookup.
const images = import.meta.glob('./assets/tutorial_assets/**/*.{png,jpg,jpeg}', { eager: true, import: 'default' });
const asset = (path) => images[`./assets/tutorial_assets/${path}`];

export const signInSteps = [
    {
        image: asset('1_sign_in/1_home.png'),
        title: 'Welcome to Synthesis AI Lab',
        description: 'Start your journey at the home page.'
    },
    {
        image: asset('1_sign_in/2_sign_up.png'),
        title: 'Create Your Account',
        description: 'Sign up and login with your email address to access all features.'
    },
    {
        image: asset('1_sign_in/3_home_logged_in.png'),
        title: 'Your Dashboard',
        description: 'Once logged in, you can see all the existing workspaces on the left panel.'
    }
];

export const workspaceSteps = [
    {
        image: asset('2_workspace/2_new_workspace.png'),
        title: 'Create New Workspace',
        description: 'Click "New Workspace" on the left panel to start a new project with a name.'
    },
    {
        image: asset('2_workspace/3_workspace_preview_description.png'),
        title: 'Workspace Preview',
        description: 'Edit the description of the workspace and view all existing readings and annotations.'
    },
    {
        image: asset('2_workspace/4_annotation_upload.png'),
        title: 'Upload Annotations',
        description: 'Click "Upload" on the top-right corner to import annotation data in .csv format.'
    },
    {
        image: asset('2_workspace/6_required_reading_list.png'),
        title: 'Required Reading List & Instructor Guiding Questions',
        description: 'Click "Edit" button of the annotation file to check and edit the required reading list and Instructor Guiding Questions for this annotation.'
    },
    {
        image: asset('2_workspace/7_reading_upload.png'),
        title: 'Readings Upload and Analysis',
        description: 'Upload .pdf documents of the required readings for further analysis.'
    },
    {
        image: asset('2_workspace/8_reading_fulltext_summary_extraction.png'),
        title: 'Reading Full-text and Summary',
        description: 'Leverage AI to extract full-text and generate summaries for the required readings.'
    },
    {
        image: asset('2_workspace/9_open_workspace.png'),
        title: 'Dive into the annotations',
        description: 'Click "Open" to enter the Synthesis Canvas and start synthesizing the annotations.'
    }
];

export const synthesisCanvasSteps = [
    {
        image: asset('3_synthesis_canvas/1_synthesis_canvas_panels.png'),
        title: 'Three-Panel Layout',
        description: 'The canvas is divided into panels for Knowledge Graph, AI Partner, and Text Editor. Each can be resized and minimized as needed.'
    },
    {
        image: asset('3_synthesis_canvas/2_generate_graph.png'),
        title: 'Knowledge Graph Generation',
        description: 'The AI cluster the annotations into themes and generates a knowledge graph to visualize the relationships.'
    },
    {
        image: asset('3_synthesis_canvas/3_annotation_highlight.png'),
        title: 'Highlight & Edit',
        description: 'In the knowledge graph, click on an annotation to highlight the theme and related nodes, hover over the annotation to edit.'
    },
    {
        image: asset('3_synthesis_canvas/5_thread_highlight.png'),
        title: 'In-Sync Interaction',
        description: 'Follow the threads to see how ideas evolve and connect. Click on the capsule in AI Partner to summarize the thread.'
    },
    {
        image: asset('3_synthesis_canvas/6_modify_graph.png'),
        title: 'Modify Graph',
        description: 'Edit the knowledge graph manually. Or click "Modify Graph" to let the AI suggest changes based on the structure and new insights, accept or reject the suggestions directly in the conversation.'
    },
    {
        image: asset('3_synthesis_canvas/7_AI_conversation.png'),
        title: 'Freeform Conversation',
        description: 'Chat with the AI to ask questions, request summaries, and get insights based on the annotations, readings, and knowledge graph.'
    },
    {
        image: asset('3_synthesis_canvas/8_inline_text_insert.png'),
        title: 'Inline Text Insert',
        description: 'When selected, any text generated in the AI Partner can be inserted directly into the Text Editor with one click.'
    },
    {
        image: asset('3_synthesis_canvas/9_graph_to_text.png'),
        title: 'Graph to Text',
        description: 'Generate a synthesis draft based on the knowledge graph. The AI Partner will create a structured and draft text that you can further edit in the Text Editor.'
    },
    {
        image: asset('3_synthesis_canvas/9_graph_to_text.png'),
        title: 'Dual-link Reference*',
        description: 'Citations of annotations in AI Partner and Text Editor are linked back to Knowledge Graph for context and traceability. *Expected to be available before 26 Spring.'
    },
    {
        image: asset('3_synthesis_canvas/10_synthesis_export.png'),
        title: 'Synthesis Export',
        description: 'Export your synthesis as .txt or .md file for further use and sharing.'
    }
];

export const snapshotSteps = [
    {
        image: asset('4_interaction_snapshot/0_placeholder.jpeg'),
        title: 'Interaction Snapshot',
        description: 'Under development, stay tuned for updates.'
    }
];