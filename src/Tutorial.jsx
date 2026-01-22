import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Layout, Typography, Button, Tabs, theme, Row, Col, Grid } from 'antd';
import { RocketOutlined, PlayCircleOutlined, LeftOutlined, RightOutlined, CommentOutlined, DeploymentUnitOutlined, EditOutlined, FileTextOutlined, ArrowRightOutlined, FolderAddOutlined } from '@ant-design/icons';
import { signInSteps, workspaceSteps, synthesisCanvasSteps, snapshotSteps } from './tutorialData';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const landingImage = new URL('./assets/tutorial_assets/landing_page.png', import.meta.url).href;

const StepViewer = ({ steps, onNextTab, onPrevTab, isActive, onStepChange, targetStep }) => {
    const screens = useBreakpoint();
    const [currentStep, setCurrentStep] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (isActive && (targetStep === undefined || targetStep === null)) {
            setOpacity(0);
            const timer = setTimeout(() => setOpacity(1), 100);
            return () => clearTimeout(timer);
        }
    }, [isActive, targetStep]);

    useEffect(() => {
        if (targetStep !== undefined && targetStep !== null && targetStep !== currentStep) {
            changeStep(targetStep);
        }
    }, [targetStep]);

    useEffect(() => {
        if (onStepChange) {
            onStepChange(currentStep);
        }
    }, [currentStep, onStepChange]);

    const changeStep = (newStep) => {
        setOpacity(0);
        setTimeout(() => {
            setCurrentStep(newStep);
            setOpacity(1);
        }, 300);
    };

    const nextStep = useCallback(() => {
        if (currentStep < steps.length - 1) {
            changeStep(currentStep + 1);
        } else if (onNextTab) {
            onNextTab();
        }
    }, [currentStep, steps.length, onNextTab]);

    const prevStep = useCallback(() => {
        if (currentStep > 0) {
            changeStep(currentStep - 1);
        } else if (onPrevTab) {
            onPrevTab();
        }
    }, [currentStep, onPrevTab]);

    useEffect(() => {
        if (!isActive) return;

        const handleKeyDown = (e) => {
            const activeElement = document.activeElement;
            if (activeElement && (
                activeElement.getAttribute('role') === 'tab' ||
                activeElement.tagName === 'INPUT' ||
                activeElement.tagName === 'TEXTAREA'
            )) {
                return;
            }

            if (e.key === 'ArrowRight') nextStep();
            if (e.key === 'ArrowLeft') prevStep();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextStep, prevStep, isActive]);

    const step = steps[currentStep];

    return (
        <div style={{ padding: '20px 20px', maxWidth: 1200, margin: '0 auto' }}>
            <Row gutter={[40, 40]} align="middle">
                <Col xs={24} lg={14}>
                    <div style={{
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        background: '#f5f5f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: screens.md ? 360 : 200,
                        position: 'relative'
                    }}>
                        <img
                            src={step.image}
                            alt={step.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                opacity: opacity,
                                transition: 'opacity 0.3s ease-in-out'
                            }}
                        />
                    </div>
                </Col>
                <Col xs={24} lg={10}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: screens.lg ? 40 : 0 }}>
                        <Title level={3} style={{ marginBottom: 16, marginTop: 0, fontSize: '1.75rem' }}>{step.title}</Title>
                        <Paragraph style={{ fontSize: '1rem', color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
                            {step.description}
                        </Paragraph>

                        <div style={{ display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
                            {steps.map((_, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: 10, height: 10, borderRadius: '50%',
                                        background: index === currentStep ? '#1677ff' : '#ddd',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s'
                                    }}
                                    onClick={() => changeStep(index)}
                                />
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: 16 }}>
                            <Button
                                shape={currentStep === 0 && onPrevTab ? 'round' : 'circle'}
                                icon={<LeftOutlined />}
                                onClick={prevStep}
                                disabled={currentStep === 0 && !onPrevTab}
                                size="large"
                                style={currentStep === 0 && onPrevTab ? { padding: '0 24px' } : {}}
                            >
                                {currentStep === 0 && onPrevTab ? 'Previous Tab' : null}
                            </Button>
                            <Button
                                type="primary"
                                shape={currentStep === steps.length - 1 ? 'round' : 'circle'}
                                icon={<RightOutlined />}
                                iconPlacement="end"
                                onClick={nextStep}
                                disabled={currentStep === steps.length - 1 && !onNextTab}
                                size="large"
                                style={currentStep === steps.length - 1 ? { padding: '0 24px' } : {}}
                            >
                                {currentStep === steps.length - 1 ? 'Next Tab' : null}
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

const ProjectBigPicture = ({ innerRef, activeStep, onStepClick }) => {
    const screens = useBreakpoint();
    const steps = [
        { icon: <CommentOutlined />, title: <>Student Social<br />Annotation</> },
        { icon: <FolderAddOutlined />, title: <>Workspace<br />Management</> },
        { icon: <DeploymentUnitOutlined />, title: <>AI-Generated<br />Knowledge Graph</> },
        { icon: <EditOutlined />, title: <>Human-AI<br />Collaborative Edit</> },
        { icon: <FileTextOutlined />, title: <>Graph to<br />Synthesis</> },
    ];

    return (
        <div ref={innerRef} style={{ padding: screens.md ? '10px 20px' : '10px 20px', background: '#fff' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: 10, marginTop: 20, fontSize: '1.75rem' }}>
                    How It Works
                </Title>
                <div style={{ textAlign: 'center', marginBottom: 20, color: '#888', fontSize: '0.9rem' }}>
                    Click on the icons to view steps
                </div>
                <Row gutter={[16, 24]} justify="center" align="stretch" style={{ marginBottom: 20 }}>
                    {steps.map((step, index) => {
                        const isActive = index === activeStep;
                        const color = isActive ? '#fff' : '#1677ff';
                        const bgColor = isActive ? '#1677ff' : '#f5f5f5';

                        return (
                            <React.Fragment key={index}>
                                <Col xs={24} sm={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <div
                                        onClick={() => onStepClick(index)}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            gap: 8,
                                            opacity: 1,
                                            transform: isActive ? 'scale(1.05)' : 'scale(1)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <div style={{
                                            fontSize: 28,
                                            color: color,
                                            background: bgColor,
                                            width: 64,
                                            height: 64,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: isActive ? '0 8px 20px rgba(22, 119, 255, 0.4)' : 'none',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            {step.icon}
                                        </div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: isActive ? 600 : 400, lineHeight: 1.4, color: '#333' }}>
                                            {step.title}
                                        </div>
                                    </div>
                                </Col>
                                {index < steps.length - 1 && (
                                    <Col xs={0} md={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <div style={{ height: 64, display: 'flex', alignItems: 'center' }}>
                                            <ArrowRightOutlined style={{ fontSize: 20, color: '#bfbfbf' }} />
                                        </div>
                                    </Col>
                                )}
                            </React.Fragment>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

const Tutorial = ({ onGoHome }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const screens = useBreakpoint();

    const [activeTab, setActiveTab] = useState('1');
    const [tabSteps, setTabSteps] = useState({ '1': 0, '2': 0, '3': 0, '4': 0 });
    const [targetStepMap, setTargetStepMap] = useState({ '1': null, '2': null, '3': null, '4': null });
    const tutorialSectionRef = useRef(null);
    const howItWorksRef = useRef(null);

    useEffect(() => {
        document.title = "Synthesis AI Lab Tutorial";
        return () => {
            document.title = "Synthesis AI Lab";
        };
    }, []);

    const scrollToTutorial = () => {
        howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSteps = () => {
        tutorialSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const updateTabStep = useCallback((tabKey, step) => {
        setTabSteps(prev => ({ ...prev, [tabKey]: step }));
    }, []);

    const handleBigPictureClick = (index) => {
        let targetTab = '1';
        let targetStep = 0;

        switch (index) {
            case 0:
                targetTab = '1';
                targetStep = 0;
                break;
            case 1:
                targetTab = '2';
                targetStep = 0;
                break;
            case 2:
                targetTab = '3';
                targetStep = 0;
                break;
            case 3:
                targetTab = '3';
                targetStep = 2;
                break;
            case 4:
                targetTab = '3';
                targetStep = 6;
                break;
            default:
                break;
        }

        setActiveTab(targetTab);
        setTargetStepMap(prev => ({ ...prev, [targetTab]: targetStep }));
        setTimeout(() => {
            setTargetStepMap(prev => ({ ...prev, [targetTab]: null }));
        }, 500);
    };

    const getActiveBigPictureStep = () => {
        if (activeTab === '1') return 1;
        if (activeTab === '2') return 1;
        if (activeTab === '3') {
            const step = tabSteps['3'];
            if (step <= 1) return 2;
            if (step <= 5) return 3;
            return 4;
        }
        return -1;
    };

    const handleNextTab = useCallback(() => {
        setActiveTab(prev => {
            const nextKey = parseInt(prev) + 1;
            if (nextKey <= 4) {
                scrollToTutorial();
                return String(nextKey);
            }
            return prev;
        });
    }, []);

    const handlePrevTab = useCallback(() => {
        setActiveTab(prev => {
            const prevKey = parseInt(prev) - 1;
            if (prevKey >= 1) {
                scrollToTutorial();
                return String(prevKey);
            }
            return prev;
        });
    }, []);

    const items = useMemo(() => [
        {
            key: '1',
            label: 'Sign Up & Log-in',
            children: <StepViewer steps={signInSteps} onNextTab={handleNextTab} isActive={activeTab === '1'} onStepChange={(s) => updateTabStep('1', s)} targetStep={targetStepMap['1']} />,
        },
        {
            key: '2',
            label: 'Workspace',
            children: <StepViewer steps={workspaceSteps} onNextTab={handleNextTab} onPrevTab={handlePrevTab} isActive={activeTab === '2'} onStepChange={(s) => updateTabStep('2', s)} targetStep={targetStepMap['2']} />,
        },
        {
            key: '3',
            label: 'Synthesis Canvas',
            children: <StepViewer steps={synthesisCanvasSteps} onNextTab={handleNextTab} onPrevTab={handlePrevTab} isActive={activeTab === '3'} onStepChange={(s) => updateTabStep('3', s)} targetStep={targetStepMap['3']} />,
        },
        {
            key: '4',
            label: 'Interaction Snapshot',
            children: <StepViewer steps={snapshotSteps} onPrevTab={handlePrevTab} isActive={activeTab === '4'} onStepChange={(s) => updateTabStep('4', s)} targetStep={targetStepMap['4']} />,
        },
    ], [handleNextTab, handlePrevTab, activeTab, updateTabStep, targetStepMap]);

    const renderTabBar = useCallback((props, DefaultTabBar) => (
        <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: colorBgContainer,
        }}>
            <DefaultTabBar {...props} style={{ marginBottom: 0 }} />
        </div>
    ), [colorBgContainer]);

    return (
        <Layout style={{ height: '100vh', background: '#fff' }}>
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', padding: '0 24px', borderBottom: '1px solid #f0f0f0', zIndex: 100 }}>
                <div style={{ color: '#001529', fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 10 }}>
                    Synthesis AI Lab <span style={{ fontWeight: 'normal', fontSize: '0.9rem', color: '#888', marginLeft: 8 }}>Tutorial</span>
                </div>
                <Button type="primary" icon={<RocketOutlined />} onClick={() => window.location.href = 'http://74.249.196.43/'}>
                    Launch App
                </Button>
            </Header>

            <Content style={{ overflowY: 'auto', scrollBehavior: 'smooth' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '60px 20px 0',
                    background: 'linear-gradient(180deg, #f0f5ff 0%, #ffffff 100%)',
                    minHeight: 'min(calc(100vh - 60px), auto)',
                    overflow: 'hidden'
                }}>
                    <div style={{ textAlign: 'center', maxWidth: 800, marginBottom: 40 }}>
                        <Title level={1} style={{ fontSize: '2.5rem', marginBottom: 16, letterSpacing: '-1px' }}>
                            Synthesis<span style={{ color: '#1677ff' }}> AI</span> Lab
                        </Title>
                        <Paragraph style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.6 }}>
                            AI-augmented collaborative learning environment.
                        </Paragraph>
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            icon={<PlayCircleOutlined />}
                            onClick={scrollToTutorial}
                            style={{ height: 48, padding: '0 32px', fontSize: 16, marginTop: 16, boxShadow: '0 4px 14px rgba(22, 119, 255, 0.3)' }}
                        >
                            Start Tutorial
                        </Button>
                    </div>

                    <div style={{
                        width: '100%',
                        maxWidth: 'min(1000px, 160vh)',
                        borderRadius: '16px 16px 0 0',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                        border: '4px solid rgba(255,255,255,0.8)',
                        borderBottom: 'none',
                        position: 'relative',
                        background: '#e6f4ff',
                        marginBottom: -20
                    }}>
                        <img
                            src={landingImage}
                            alt="Synthesis AI Lab Dashboard Interface"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.innerHTML = '<div style="padding: 100px; text-align: center; color: #1677ff; font-size: 1.5rem;">Dashboard Preview Image</div>';
                            }}
                        />
                    </div>
                </div>

                <ProjectBigPicture innerRef={howItWorksRef} activeStep={getActiveBigPictureStep()} onStepClick={handleBigPictureClick} />

                <div ref={tutorialSectionRef} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: colorBgContainer, flex: 1, margin: '0 auto', width: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>

                        <Tabs
                            activeKey={activeTab}
                            onChange={setActiveTab}
                            items={items}
                            size="large"
                            centered={screens.md}
                            renderTabBar={renderTabBar}
                        />
                    </div>
                </div>

                <Footer style={{ textAlign: 'center', background: '#f8f9fa' }}>
                    Synthesis AI Lab ©{new Date().getFullYear()}
                </Footer>
            </Content>
        </Layout>
    );
};

export default Tutorial;