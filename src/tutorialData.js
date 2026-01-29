// Preload tutorial images via Vite glob so they are included in the build and work with a dynamic lookup.
const images = import.meta.glob('./assets/tutorial_assets/**/*.{png,jpg,jpeg}', { eager: true, import: 'default' });
const asset = (path) => images[`./assets/tutorial_assets/${path}`];

export const signInSteps = [
    {
        image: asset('1_sign_in/1_home.png'),
        title: 'Welcome to Synthesis AI Lab',
        description: 'Start on the home page to begin your journey of knowledge synthesis.'
    },
    {
        image: asset('1_sign_in/2_sign_up.png'),
        title: 'Sign up or Sign in',
        description: 'Use your email to create an account or sign in and access all features.'
    },
    {
        image: asset('1_sign_in/3_home_logged_in.png'),
        title: 'Student Dashboard',
        description: 'Click “Join Group by Code” and enter the code shared by your instructor to join your class. Once joined, you will see all available synthesis workspaces created by your instructor in the left panel.'
    }
];

export const workspaceSteps = [
    {
        image: asset('2_workspace/2_new_workspace.png'),
        title: 'Manage Your Class Group & Create Synthesis Workspaces (instructor only)',
        description: [
            'Click "User Group Management" to create/manage your class group. This will generate an invite code to share with your students.',
            'Create a new workspace for each synthesis task.',
            'Click a workspace to upload readings and student discussion data.'
        ]
    },
    {
        image: asset('2_workspace/4_annotation_upload.png'),
        title: 'Upload Annotations & Readings',
        description: 'Click "New Annotation" and follow the prompts to upload student annotations and the required readings.'
    },
    {
        image: asset('2_workspace/9_open_workspace.png'),
        title: 'Dive Into the Annotations',
        description: 'Click "Open" to enter the Synthesis Canvas and start synthesizing the annotations.'
    }
];

export const synthesisCanvasSteps = [
    {
        image: asset('3_synthesis_canvas/1_synthesis_canvas_panels.png'),
        title: 'Synthesis Canvas Overview',
        description: 'The canvas is divided into three panels: Synthesis Graph, AI Partner, and Synthesis Editor. Each panel can be resized and minimized as needed.'
    },
    {
        image: asset('3_synthesis_canvas/2_generate_graph.png'),
        title: 'Knowledge Synthesis Graph Generation',
        description: 'Click "Interactive Build" in the top-left corner, then click "Start Build". The AI will generate a base synthesis graph based on student annotations, assigned readings, and any instructor-provided inputs.'
    },
    {
        image: asset('3_synthesis_canvas/3_annotation_highlight.png'),
        title: 'Knowledge Synthesis Graph Overview ',
        description: [
            'Click on any of these nodes or cards to view details.',
            'Annotations (shown as blue nodes) are connected to themes, represented as Synthesis Nodes displayed in square cards.',
            'Synthesis Nodes may include formal claims, as well as key ideas or emerging insights that do not yet fit a strict claim structure.',
        ]
    },
    {
        image: asset('3_synthesis_canvas/4_graph_interaction.png'),
        title: 'Graph Iteraction',
        description: 'In the Synthesis canvas, users can further iterate on the base synthesis graph by analyzing connections across student ideas.',
        
    },
    {
        image: asset('3_synthesis_canvas/7_AI_conversation.png'),
        title: 'Graph Iteraction with Your AI Partner',
        description: [
            '**Focus the AI Partner**: When you click on annotations or Synthesis Nodes, your selections are sent to the AI Partner. This tells the AI what you are currently focusing on.',
            '**Summarize Selected Content**: Use the Summarize button to generate a summary of selected Synthesis Nodes or an annotation thread.',
            '**Modify the Graph**: Click "Modify Graph" to ask the AI to suggest improvements to the synthesis graph.',
            '**Graph to Text**: Click "Graph to Text" to generate a draft written synthesis based on the current state of the synthesis graph.'

        ]
    },
    {
        image: asset('3_synthesis_canvas/8_inline_text_insert.png'),
        title: 'Inline Text Insert',
        description: 'You can insert AI-generated text directly into the synthesis text editor with one click'
    },
    {
        image: asset('3_synthesis_canvas/9_graph_to_text.png'),
        title: 'Graph to Text',
        description: 'Generate a synthesis draft based on the knowledge graph. The AI Partner will create a structured and draft text that you can further edit in the Text Editor.'
    },
    {
        image: asset('3_synthesis_canvas/9_graph_to_text.png'),
        title: 'Backlink Reference*',
        description: 'Annotations and claims referenced in the Synthesis Editor link back to the Knowledge Graph so you can trace ideas and view their original context. * Coming soon'
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